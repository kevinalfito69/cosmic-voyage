import React from 'react';

const SmallButton = () => {
    return (
        <button className="cursor-pointer transition-all bg-gray-500 text-white px-3 py-2 rounded-lg
border-gray-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 256 256"><path fill="#ffff" d="M212.92 17.71a7.89 7.89 0 0 0-6.86-1.46l-128 32A8 8 0 0 0 72 56v110.1A36 36 0 1 0 88 196v-93.75l112-28v59.85a36 36 0 1 0 16 29.9V24a8 8 0 0 0-3.08-6.29"/></svg>
</button>
    );
}

export default SmallButton;
