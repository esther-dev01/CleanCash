function FormRowVertical({ label, error, children }) {
    return (
      <div className="flex flex-col gap-w">
        {label && <label className="text-lg text-white mb-1" htmlFor={children.props?.id}>{label}</label>}
        {children}
        {error && <span className="text-2xl text-red-700">{error}</span>}
      </div>
    );
  }
  
  export default FormRowVertical;