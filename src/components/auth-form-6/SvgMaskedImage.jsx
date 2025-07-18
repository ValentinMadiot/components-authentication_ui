import { bgImg } from "./assets/img/index";

const SvgMaskedImage = () => {
  return (
    <svg
      className="auth6__blob"
      viewBox="0 0 566 840"
      xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha">
        <path
          d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
             0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
             591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
             167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          fill="#fff"
        />
      </mask>

      <g mask="url(#mask0)">
        <path
          d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
             0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
             591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
             167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          fill="#f0f0f0"
        />
        <image className="auth6__img" href={bgImg} />
      </g>
    </svg>
  );
};

export default SvgMaskedImage;
