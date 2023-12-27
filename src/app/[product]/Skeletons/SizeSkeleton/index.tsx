const SizeSkeleton = () =>
  [1, 2, 3].map((i) => (
    <div
      key={`size-skeleton-${i}`}
      className="skeleton rounded-2xl px-4 h-[26px] w-14"
    ></div>
  ));

export default SizeSkeleton;
