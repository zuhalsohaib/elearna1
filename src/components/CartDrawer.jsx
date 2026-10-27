import { C } from "../data/data";
import { btnYellow } from "../styles/ui";

export default function CartDrawer({ cart, remove, open, close }) {
  const total = cart.reduce((s, c) => s + c.price, 0);
  return (
    <div className={`fixed inset-0 z-[100] bg-black/55 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={close}>
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-[26.25rem] flex-col bg-white text-ink transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5"><h4 className="text-xl">Your Cart</h4><button onClick={close}>✕</button></div>
        <div className="flex-1 overflow-auto px-5">
          {!cart.length && <p>No items found.</p>}
          {cart.map((c) => (
            <div className="flex items-center gap-3 border-b border-line py-3.5" key={c.id}>
              <img src={C + c.img} alt="" className="h-14 w-[4.375rem] object-cover" />
              <div className="flex-1 text-sm"><b>{c.title}</b><p>${c.price}</p></div>
              <button className="text-sm text-red-600" onClick={() => remove(c.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3.5 border-t border-line p-5">
          <div className="flex w-full justify-between"><span>Subtotal</span><b>${total}</b></div>
          <button className={`${btnYellow} w-full text-center`} disabled={!cart.length}>Continue to Checkout</button>
        </div>
      </aside>
    </div>
  );
}
