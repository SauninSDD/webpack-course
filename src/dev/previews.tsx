import {Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import React from "react";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
        </Previews>
    );
};

export default ComponentPreviews;