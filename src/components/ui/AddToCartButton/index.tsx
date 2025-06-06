import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { ROUTES } from '@router/routes';
import { addToCart } from '@services/state/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '@services/state/store';
import { ProductItem } from '@types';

interface AddToCartButtonProps {
  item: ProductItem;
}

export const AddToCartButton = ({ item }: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);

  const availableItem = cart.find((cartItem) => cartItem.id == item._id);

  const generalClasses =
    'py-3 text-center rounded-full font-medium shadow-xs w-full min-h-12';

  const handleAddBtn = () => {
    dispatch(addToCart(item._id));

    toast.success(`${item.name.slice(0, 12).trim()}... added to cart!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <>
      {availableItem ? (
        <Link
          to={ROUTES.cart}
          className={twMerge(
            generalClasses,
            'flex cursor-pointer items-center justify-center gap-2 bg-slate-900 text-white duration-200 hover:bg-slate-700',
          )}
        >
          <FaArrowLeft />
          View in cart
        </Link>
      ) : (
        <button
          type="button"
          className={twMerge(
            generalClasses,
            'cursor-pointer bg-[#e7e7e7] duration-200 hover:bg-black hover:text-white',
          )}
          onClick={handleAddBtn}
        >
          Add to cart
        </button>
      )}
    </>
  );
};
