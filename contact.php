<?php

// Fetching Values from URL.
$nombre = $_POST['nombre1'];
$email = $_POST['email1'];
$tel = $_POST['tel1'];
$mensaje = $_POST['mensaje1'];

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$subject = $nombre;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:#000000;">Hola ' . $nombre . ',<br/>'
. '<br/>Datos del sitio.<br/><br/>'
. 'Nombre:' . $nombre . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Tel:' . $tel . '<br/>'
. 'Mensaje:' . $mensaje . '<br/>'
. '<br/>'
. 'Fin datos de contacto desde el sitio web  .</div>';
$sendmessage = "<div style=\"background-color:#ffffff; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("claudiomonzoni@hotmail.com", $subject, $sendmessage, $headers);
echo "Sus datos fueron enviados.";

} else {
echo "<span>* Email invalido *</span> / <span>* Invalid Email *</span>";
}
?>
