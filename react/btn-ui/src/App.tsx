import Button from './components/Button';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <Button type="button" className="bg-[#4f4f4f]">
        Add
      </Button>
      <Button type="button" className="bg-[#ed4848]">
        Cancel
      </Button>
      <Button type="button" className="bg-[#7D48ED]">
        Success
      </Button>
    </div>
  );
}
