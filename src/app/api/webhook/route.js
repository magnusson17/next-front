import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request) {
    // Logic to handle incoming webhook request
    const body = await request.json();
    
    // Process the webhook data as needed
    console.log("Received webhook data:", body);
    
    revalidatePath('/pizzas');

    return NextResponse.json({ message: "Webhook received successfully" });
}


