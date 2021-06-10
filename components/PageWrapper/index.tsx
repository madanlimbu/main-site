import {ReactElement} from "react";
import Metadata, {MetadataProps} from "../Metadata";
import Navigation from "../Navigation";

interface PageProps {
    children: ReactElement;
    metadata: MetadataProps;
}

export default function PageWrapper({ children, metadata }: PageProps) {
    return (
        <>
            <Metadata {...metadata}/>
            <Navigation />
            <div className="content-wrapper">
                {children}
            </div>
        </>
    );
}