import { Fragment, PropsWithChildren, useMemo } from "react";

interface Props {
  tag?: "h1" | "h2" | "h3" | "p";
  separator?: string;
  className?: string;
  styledClassName?: string;
}

export function StyledText(props: PropsWithChildren<Props>) {
  const children = props.children;
  const separator = props.separator ?? "*";
  const Tag = props.tag ?? "p";

  if (typeof children !== "string") {
    return <Tag className={props.className}>{props.children}</Tag>;
  }

  const brokeUpText = useMemo(() => children!.split(separator), [children, separator]);

  return (
    <Tag className={props.className}>
      {brokeUpText.map((text, index) =>
        index % 2 == 0 ? (
          <Fragment key={index}>{text}</Fragment>
        ) : (
          <span key={index} className={props.styledClassName}>
            {text}
          </span>
        )
      )}
    </Tag>
  );
}
