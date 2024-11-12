import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
// il webhook invia dati a questo endpoint con metodo POST
// uso la fun POST per prendere la req del webhook
export async function POST(request) {
    // gestisco e loggo la req (facoltativo)
    const body = await request.json();
    console.log("Received webhook data:", body);
    // rivalido il path specifico
    revalidatePath('/pizzas');
    // ritorno una risposta a Drupal per confermare la ricezione del webhooks
    return NextResponse.json({ message: "Webhook received successfully" });
}


