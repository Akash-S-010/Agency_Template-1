import React from "react";
import Button from "./Button";

const PageCTA = ({
  title,
  description,
  buttonText,
  buttonProps = {},
  secondaryText,
  className = ""
}) => {
  const { className: buttonClassName = "", variant, ...restButtonProps } = buttonProps;
  const buttonClasses = ["mx-auto sm:mx-0", buttonClassName].filter(Boolean).join(" ");

  return (
    <section className={`py-24 px-6 md:px-12 lg:px-20 bg-primary text-white ${className}`}>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            {description}
          </p>
        )}
        {(buttonText || secondaryText) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttonText && (
              <Button
                text={buttonText}
                variant={variant ?? "inverted"}
                className={buttonClasses}
                {...restButtonProps}
              />
            )}
            {secondaryText && (
              <span className="text-sm text-white/80">
                {secondaryText}
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageCTA;
