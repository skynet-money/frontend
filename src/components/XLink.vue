<template>
    <a
      href="https://x.com/skynetmoney_xyz"
      target="_blank"
      rel="noopener noreferrer"
      class="x-link"
      :title="`Follow skynet.money on X`"
    >
      <svg height="25" width="25" viewBox="0 0 24 24" class="x-logo">
        <path
          fill="#ea23dd"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    </a>
  </template>
  
  <script>
  export default {
    name: "XLink",
    props: {
      theme: String,
    },
  };
  </script>
  
  <style scoped>
  .x-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #24292e;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .x-link:hover {
    color: #1da1f2; /* X's brand color */
  }
  
  .x-logo {
    transition: transform 0.2s ease;
  }
  
  .x-link:hover .x-logo {
    transform: scale(1.1);
  }
  </style>