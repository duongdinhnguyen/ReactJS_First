import { memo } from "react";

const Content = ({ data }) => {
    console.log(data)

    return (
        <h1>
            Hello nè
        </h1>
    )
}

export default memo(Content);