export default function Head() {
  return (
    <>
      <title>WithPlainScript</title>
      <script
        async="true"
        dangerouslySetInnerHTML={{
          __html: `var test = true; console.log(test);`,
        }}
      />
    </>
  );
}
