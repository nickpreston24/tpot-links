export const createSVG = (content = '') =>
  `
<div class="${tw`flex items-center justify-center h-64 bg-purple-400`}">
  <div>
  <svg
              viewBox="0 0 210 297"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              ${content}
            </svg>
  </div>
</div>
`
