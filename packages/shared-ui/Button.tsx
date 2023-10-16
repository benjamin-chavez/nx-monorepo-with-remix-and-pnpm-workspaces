// packages/shared-ui/Button.tsx

export function Button(props: any) {
  console.log('my feature');

  return (
    <button onClick={() => props.onClick()}>
      {props.children}
      {/* <>testing</> */}
    </button>
  );
}

export default Button;
