import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

// clsx :  کلاس ها رو مرتب و فیلتر می کنه اونایی که معلوم نیست چین
// twMerge :  اگر کلاس ها تناقض داشته باشن و از یه کلاس دوتا باشه میاد اخری رو نگه میداره
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
