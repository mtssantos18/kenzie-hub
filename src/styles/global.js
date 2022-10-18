import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-primary: #ff577f;
    --color-primary-50: #ff427f;
    --color-primary-negative: #59323f;
    --grey-0: #f8f9fa;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --feedback-success: #3fe864;
    --feedback-failure: #e83f5b;
}

body{
    background-color: var(--grey-4);
    color: var(--grey-0);
}

body, input, button{
    font-family: 'Inter', serif;
    font-size: 1rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`;
