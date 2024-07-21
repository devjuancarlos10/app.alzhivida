import React, { Fragment, ReactNode } from "react";

interface Props {
    children: ReactNode;
    sender: boolean;
}

function Message(props: Props) {
    const { children, sender } = props;
    return (
        <div
            className={`card ${sender ? 'text-start' : 'text-end'}`}
            style={{
                maxWidth: '80%',
                margin: '10px 0',
                alignSelf: sender ? 'flex-start' : 'flex-end',
                backgroundColor: sender ? '#dfe3e0' : '#6E5CD3',
                color: sender ? 'black' : 'white'
            }}
        >
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

interface ContentMessage {
    author: string;
    text: string;
}

export function MessageBody(props: ContentMessage) {
    const { author, text } = props;

    return (
        <Fragment>
            <h6 className="card-title">{author}</h6>
            <p className="card-text">{text}</p>
        </Fragment>
    );
}

export default Message;
