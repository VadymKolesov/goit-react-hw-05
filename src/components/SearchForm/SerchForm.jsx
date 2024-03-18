import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";

export default function SearchForm({ onSearch }) {
  const [params] = useSearchParams();

  return (
    <div>
      <Formik
        initialValues={{ query: params.get("query") ?? "" }}
        onSubmit={(val) => {
          onSearch(val.query);
        }}
      >
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
