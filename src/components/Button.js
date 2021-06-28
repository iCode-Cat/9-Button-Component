import React from 'react'
import styled from 'styled-components';



const Button = (props) => {
    const { text, variant, color, disabled, disableShadow, startIcon, endIcon, size } = props

    const colorObject = {
        background:'#E0E0E0',
        colors:'#3F3F3F',
        hoverBackground:'#AEAEAE10',
        hoverColor:"#3F3F3F"
    }

    let { background, colors , hoverBackground, hoverColor } = colorObject;

    const colorHandler = ({className, mainColor, hoverNoneFilled, hoverContained}) => {
        if(color === 'default') {
            if(variant !== 'outline' && variant !== 'text') {
                hoverBackground = '#AEAEAE';
            }
            return
        }
        if(color === className) {
            background = mainColor;
            colors = mainColor;
            hoverColor = mainColor;
            hoverBackground = hoverNoneFilled;
            if(variant !== 'outline' && variant !== 'text') {
                colors = '#FFF';
                hoverBackground = hoverContained;
                hoverColor = '#FFF';
                return
            }
            return
        }
    }

    // Primary
    colorHandler({
        className : 'primary',
        mainColor : '#2962FF',
        hoverNoneFilled : '#2962FF10',
        hoverContained : '#0039CB'
    })

    // Secondary
    colorHandler({
        className : 'secondary',
        mainColor : '#455A64',
        hoverNoneFilled : '#455A6410',
        hoverContained : '#1C313A'
    })

    // Danger
    colorHandler({
        className : 'danger',
        mainColor : '#D32F2F',
        hoverNoneFilled : '#9A000710',
        hoverContained : '#9A0007'
    })


    const CustomButtonContainer = styled.button`

.outline {
    
    background:none;
    border:solid 1px ${background};
    color:${colors};

    ${disabled ? '&:active':'&:hover , &:focus'}      {
        color:${colors};
        background:${hoverBackground};
    }

}

.text {
    
    background:none;
    color:${colors};
 
    ${disabled ? '&:active':'&:hover , &:focus'}    {
        color:${colors};
        background:${hoverBackground};
    }

}

.sm {
    padding:6px 12px;
}
.md {
    padding:8px 16px;
}
.lg {
    padding:11px 22px;
}

.startIcon {
    margin-right:10px;
}
.endIcon {
    margin-left:10px;
}

` ;

const CustomButton = styled.button`
display:flex;
align-items:center;
font-size:14px;
color:${colors};
background:${background};
padding:8px 16px;
border-radius:6px;
opacity:${disabled ? '60%' : '100%'};
cursor:pointer;
transition:.3s;
box-shadow: ${disableShadow ? 'none' : '0px 2px 3px 0 #33333320'};
${disabled ? '&:active':'&:hover , &:focus'}     {
    color:${hoverColor};
    background:${hoverBackground};
}
` ;

const Icon = styled.span`
    font-size:18px;
`;

    return (
        <CustomButtonContainer>
            <CustomButton className={`${variant} ${size}`}>
            <Icon className={`material-icons ${startIcon ? 'startIcon':''}`}>{ startIcon }</Icon>
             {text}
             <Icon className={`material-icons ${endIcon ? 'endIcon':''}`}>{ endIcon }</Icon>
            </CustomButton>
        </CustomButtonContainer>
    )
}

export default Button
