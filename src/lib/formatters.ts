export function formatDateTimeForC_F(isoDateTime: string): string {
  return isoDateTime?.replace("T", " ").replace("Z", "") ?? isoDateTime;
}
