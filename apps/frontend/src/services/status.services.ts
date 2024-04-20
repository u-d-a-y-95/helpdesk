export const getStatus = async () => {
  return await (
    await fetch("http://localhost:3000/api/settings/status", {
      headers: {
        Cookie:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdocDZ3eGlqc2ppdnY0MXh4M3NyZmphdCIsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMzFUMDM6MjY6MTEuODE4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDMtMzFUMDM6MjY6MTEuODE4WiIsImVtYWlsIjoidWRheUBlbWFpbC5jb20iLCJpYXQiOjE3MTI3NTMwMDN9.JmtDFExHy4xsk63RDMgusEHjkUfPuAichAf-5t2jBNE",
      },
    })
  ).json();
};
