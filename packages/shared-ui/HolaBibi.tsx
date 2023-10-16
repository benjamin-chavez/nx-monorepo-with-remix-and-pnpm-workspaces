// packages/shared-ui/Button.tsx

export function HolaBibi(props: any) {
  console.log('my feature');

  return (
    <button onClick={() => props.onClick()}>
      {props.children}
      {/* <>testing</> */}
    </button>
  );
}

export default HolaBibi;
