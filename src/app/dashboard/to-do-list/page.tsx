import { Button } from "@/components/ui/Button";

const Todolist = () => {
  return (
    <div className="bg-card rounded-xl text-card-foreground shadow-sm">
      <div className="space-y-1.5 p-4 mb-6 border-b border-border flex flex-row items-center">
        <h3 className="text-2xl font-medium flex-1 pr-2 ">مدیریت تسک ها</h3>
        <Button
          size="xl"
          color="success"
          variant="outline"
          className="mb-3 rounded-xl"
        >
          افزودن تسک جدید
        </Button>
      </div>
      <div className="p-6 pt-0">
        <div className="rounded-xl bg-card text-card-foreground shadow-sm">
          <div className="overflow-x-auto">
            <div className="container  min-w-full divide-y divide-border text-center">
              hi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
