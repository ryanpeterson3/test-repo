const POVRedirect = () => {
  return <p>Redirecting you to POV App...</p>;
};

export async function getServerSideProps(req, res) {
  const currentLocaleDateString = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Toronto",
  });

  const redirects = [
    {
      date: "11/7/2025",
      redirect: "https://pov.camera/qr/LqkuZKkKOEbtME0L6OP1",
    },
    {
      date: "11/9/2025",
      redirect: "https://pov.camera/qr/LqkuZKkKOEbtME0L6OP1",
    },
    {
      date: "11/11/2025",
      redirect: "https://pov.camera/qr/q9cjayfckwLWnTy5E1lZ",
    },
    {
      date: "11/13/2025",
      redirect: "https://pov.camera/qr/flLFtfkylHfU2r0zLsT5",
    },
    {
      date: "11/15/2025",
      redirect: "https://pov.camera/qr/Jc67gwm8kbyibyhMADXz",
    },
    {
      date: "11/27/2025",
      redirect: "https://pov.camera/qr/Jc67gwm8kbyibyhMADXz",
    },
    {
      date: "12/4/2025",
      redirect: "https://pov.camera/qr/CXIi06TMrdOTOIZwsB0Q",
    },
    {
      date: "12/6/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "12/9/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "12/18/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "12/20/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "12/23/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "12/29/2025",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/1/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/3/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/5/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/10/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/13/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/17/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/24/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/25/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/28/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "1/31/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "2/26/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/11/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/14/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/15/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/19/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/21/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "3/26/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/2/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/4/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/5/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/7/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/9/2026",
      redirect: "https://www.lepineapartments.com/",
    },
    {
      date: "4/15/2026",
      redirect: "https://www.lepineapartments.com/",
    },
  ];

  const currentRedirect = redirects.filter(
    (e) => e.date === currentLocaleDateString
  );

  if (currentRedirect.length === 0) {
    return {
      redirect: {
        destination: "https://www.lepineapartments.com/herosridge",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: currentRedirect[0].redirect,
        permanent: false,
      },
    };
  }
}

export default POVRedirect;
