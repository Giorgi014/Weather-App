import { clsx } from "clsx";
import './Cart.scss';

export const Cart = ({variant = "default", children, ...props}) => {
  return (
    <div
    {...props}
    className={clsx(
      "cart_container",
      {
        "today_weather_cart": variant === "today_cart",
        "sunrise_sunset_cart":variant === "sunrise_sunset",
        "forecas_weather_cart": variant === "forecast_cart"
      }
    )}
    >
      
    </div>
  )
}
