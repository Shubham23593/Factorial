import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({
  href,
  onClick,
  children,
  classes,
  type,
  onDark = false,
  ...otherProps
}) => {
  const styleKey = onDark ? `onDark_${type}` : type;

  const variant =
    type === "primary"
      ? !otherProps.disable
        ? styles[`${styleKey}__button`] || styles.primary__button
        : styles.primary__disabledButton
      : !otherProps.disable
      ? styles[`${styleKey}__button`] || styles.secondary__button
      : styles.secondary__disabledButton;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${variant} ${classes || ""}`}
      {...otherProps}
    >
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  classes: PropTypes.string,
  type: PropTypes.string,
  onDark: PropTypes.bool,
};

export default Button;
