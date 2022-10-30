export default function Head() {
  return (
    <>
      <title>WithJsonLdScript</title>
      <script
        async="true"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"Organization","logo":"http://www.your-site.com/images/logo.jpg","url":"http://www.and-this-one.com"}`,
        }}
      />
    </>
  );
}
