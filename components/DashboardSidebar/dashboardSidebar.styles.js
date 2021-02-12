export default theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
	    alignItems: "flex-start",
        height: "100vh",
        width: "20%",
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
    },
    sidebarButtons: {
        height: "48px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: "0px",
        "&: hover": {
            backgroundColor: "#121212",
        },
    }
})