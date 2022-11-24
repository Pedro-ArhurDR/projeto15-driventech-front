import myContext from "../contexts/myContext"


export default function Container() {
    return <>
                <myContext.Provider value={null} ></myContext.Provider>
    </>
}