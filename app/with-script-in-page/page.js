export default function WithScriptInPage() {
  return (
    <div>
      WithScriptInPage
      <script
        dangerouslySetInnerHTML={{
          __html: `var test = true; console.log(test);`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"Organization","logo":"http://www.your-site.com/images/logo.jpg","url":"http://www.and-this-one.com"}`,
        }}
      />
    </div>
  );
}
