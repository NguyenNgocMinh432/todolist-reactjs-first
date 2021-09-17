import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
var ButtonStyled = styled(Button)`
    margin-top:5px;
     text-align:left;
    &,&:hover{
        ${p =>
            p.isComplete && 
            css`
                text-decoration: line-through;
            `
            } 
     }
    &:hover {
         .check-icon {
             display:inline-block;
         }
     }
        .check-icon{
            display:none;
            &:hover {
                background-color:#e2e2e2;
                border-radius: 3px;
            }
    }
`
export default function Todo({ todo, onCheckbtnClick }) {
    return (
        <>
            <ButtonStyled isComplete={todo.isComplete} shouldFitContainer iconAfter ={
            !todo.isComplete&&(
            <span className="check-icon" onClick={() => onCheckbtnClick(todo.id)}
            ><CheckIcon primary="#4fff4f" /></span>)}>{todo.name}</ButtonStyled>
        </>
    )
}