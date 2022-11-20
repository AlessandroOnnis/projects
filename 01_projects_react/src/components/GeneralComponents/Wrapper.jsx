export function Wrapper({ children, chooseClass, extClass }) {
    return (
        <div className={
            chooseClass
                ? extClass
                    ? `wrapper ${extClass}`
                    : `wrapper`
                : extClass
                    ? `wrapperC ${extClass}`
                    : `wrapperC`}>
            {children}
        </div>
    )
}