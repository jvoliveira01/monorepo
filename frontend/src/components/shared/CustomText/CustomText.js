function CustomText({ children, type, className }) {
  const sharedClassName = 'leading-tight text-secondary-900';

  const H1 = (
    <h1
      className={`font-semibold text-2xl sm:text-3xl ${sharedClassName} ${className}`}
    >
      {children}
    </h1>
  );

  const H3 = (
    <h3
      className={`font-semibold text-lg sm:text-xl ${sharedClassName} ${className}`}
    >
      {children}
    </h3>
  );

  const Paragraph = (
    <p className={`text-base ${sharedClassName} ${className}`}>{children}</p>
  );

  const Caption = (
    <span
      className={`text-xs text-secondary-500 ${sharedClassName} ${className}`}
    >
      {children}
    </span>
  );

  switch (type) {
    case 'h1': {
      return H1;
    }
    case 'h3': {
      return H3;
    }
    case 'p': {
      return Paragraph;
    }
    case 'caption': {
      return Caption;
    }
    default: {
      return Paragraph;
    }
  }
}

export default CustomText;
