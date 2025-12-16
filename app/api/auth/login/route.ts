import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 401 });
    }

    // Role check
    const userRole = data.user?.user_metadata?.role;
    if (userRole !== role) {
      await supabase.auth.signOut();
      return NextResponse.json({ success: false, error: `This account is registered as ${userRole}, not ${role}` }, { status: 403 });
    }

    return NextResponse.json({ success: true, session: data.session, user: data.user });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
