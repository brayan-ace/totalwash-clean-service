export const WHATSAPP_NUMBER = "237695384587";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Total Wash Cleaning Service, I would like to book a cleaning service.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
