const FacebookLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M0 0h24v24H0z"
            style={{
                mixBlendMode: "multiply",
            }}
        />
        <path
            fill="#fff"
            d="M20.003 3H3.997A1.005 1.005 0 0 0 3 3.998v16.005a1.005 1.005 0 0 0 .998.997h8.617v-6.96h-2.34v-2.722h2.34V9.315c0-2.325 1.418-3.592 3.502-3.592.698 0 1.395 0 2.093.104V8.25h-1.433c-1.132 0-1.35.54-1.35 1.328v1.732h2.7l-.352 2.723h-2.347V21h4.575a1.006 1.006 0 0 0 .997-.997V3.997A1.005 1.005 0 0 0 20.003 3Z"
        />
    </svg>
)
export default FacebookLogo