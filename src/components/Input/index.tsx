import React, {
  useRef,
  InputHTMLAttributes,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
