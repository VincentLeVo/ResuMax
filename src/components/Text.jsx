import clsx from "clsx";

export function Heading({ className, level = 1, ...props }) {
  let Element = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        "text-2xl/8 font-semibold text-white sm:text-xl/8text-white"
      )}
    />
  );
}

export function Subheading({ className, level = 2, ...props }) {
  let Element = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        "text-base/7 font-semibold  sm:text-sm/6 text-white"
      )}
    />
  );
}
