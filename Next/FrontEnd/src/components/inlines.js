const React = require('../../node_modules/react')
module.exports = function Inline(props) {
    let inline = null
    if (props.type == 'heading') {
        inline = Heading(props)
    } else if (props.type == 'text') {
        inline = Text(props)
    } else if (props.type == 'button') {
        inline = Button(props)
    } else if (props.type == 'link') {
        inline = Link(props)
    } else {
        inline = React.createElement('span', {}, JSON.stringify(props))
    }
    return (
        inline
    )
}
function Heading(props) {
    return (
        React.createElement(
            'h' + props.data.rank.toString(),
            {
                style: props.style
            },
            props.data.text
        )
    )
}
function Text(props) {
    // const [shake, setShake] = React.useState(false);
    // const refShake = React.useRef(['text']);
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShake(true)
    //     }, 1000)
    // }, []);
    // React.useEffect(() => {
    //     if (props.style) {
    //         if (props.style.hasOwnProperty('shake_duration')) {
    //             // refShake.current.push('shake-constant')
    //             const timer = setTimeout(() => {
    //                 setShake(true)
    //             }, props.style.shake_duration * 1000)
    //             return () => {
    //                 clearInterval(timer);
    //             }
    //         }
    //     }
    // }, []);


    if (!props.data.text) {
        return (
            React.createElement('br')
        )
    }
    let c = ['text']
    if (props.style) {
        if (props.style.hasOwnProperty('shake_duration')) {
            c.push('shake')
            c.push('shake-constant')
        }
    }
    // if (shake) {
    //     c.push('shake-constant')
    // }
    return (
        React.createElement(
            'span',
            {
                className: c.join(' '),
                style: props.style
            },
            props.data.text
        )
    )
}
function Button(props) {
    click = () => {
        if (!props.data.disabled) {
            props.callback({
                type: 'pull',
                data: {
                    type: 'BUTTON_CLICK',
                    target: props.data.hash
                }
            })
        }
    }
    return (
        React.createElement(
            'span',
            {
                className: 'button',
                style: props.style,
                onClick: click
            },
            props.data.text
        )
    )
}
function Link(props) {
    click = () => {
        if (!props.disabled) {
            props.data.callback()
        }
    }
    return (
        React.createElement(
            'span',
            {
                className: 'link',
                style: props.style,
                onClick: click
            },
            props.data.text
        )
    )
}