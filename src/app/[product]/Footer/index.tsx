import { Bag } from "@/components/Icons";

interface Props {
  disabled: boolean;
}

const Footer = ({ disabled }: Props) => (
  <div className="flex bg-white justify-between w-full pb-9 px-6 fixed bottom-0">
    <div className="size-[54px] mr-6 ">
      <button
        disabled={disabled}
        className="border-[1px] border-primary rounded-xl text-primary p-[15px]"
      >
        <Bag />
      </button>
    </div>
    <button
      disabled={disabled}
      className="bg-primary w-full rounded-xl text-white font-medium"
    >
      Add to cart
    </button>
  </div>
);

export default Footer;
