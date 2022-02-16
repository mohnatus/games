import Button from "@/components/Button";

export default function Level({ id, name, checked, setLevel, className }) {
  const handleChange = () => {
    setLevel(id);
  };

  return (
    <Button className={className} type="button" primary={checked} onClick={handleChange}>
      {checked} {name}
    </Button>
  );
}
