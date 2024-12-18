// per rivalidare le routes indicate a seconda degli input che configuro nel webhooks di Drupal
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
// il webhook invia dati a questo endpoint con metodo POST
// uso la fun POST per prendere la req del webhook
export async function POST(request) {
    // gestisco la req e ricavo il type per rivalidare solo il path relativo
    const body = await request.json();
    const contentType = body.entity.type[0].target_id
    // console.log("Received webhook data type:", contentType);
    // rivalido il path specifico
    contentType === 'cibo' ? revalidatePath('/cibi') : ''
    contentType === 'bevanda' ? revalidatePath('/bevande') : ''
    // ritorno una risposta a Drupal per confermare la ricezione del webhooks
    return NextResponse.json({ message: "Webhook received successfully" });
}


