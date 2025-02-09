<template>
    <a
      href="https://warpcast.com/skynetmoney"
      target="_blank"
      rel="noopener noreferrer"
      class="warpcast-link"
      :title="`Follow skynet.money on Warpcast`"
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="warpcast-logo"
      >
        <path
          d="M18.73 27L16.06 14.43H15.94L13.27 27H5.98L1.15 6.36H8.05L10.42 18.06H10.54L12.88 6.36H19.42L21.91 18.06H22.03L24.25 6.36H30.85L26.02 27H18.73Z"
          fill="#ea23dd"
        />
      </svg>
    </a>
  </template>
  
  <script>
  export default {
    name: "WarpcastLink",
    props: {
      theme: String,
    },
  };
  </script>
  
  <style scoped>
  .warpcast-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #24292e;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .warpcast-link:hover {
    color: #8b5cf6; /* Warpcast's purple brand color */
  }
  
  .warpcast-logo {
    transition: transform 0.2s ease;
  }
  
  .warpcast-link:hover .warpcast-logo {
    transform: scale(1.1);
  }
  </style>