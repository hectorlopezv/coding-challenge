import { Suspense } from "react";
import TodosList from "./(user)/todos/TodosList";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google image"
        />
        <Suspense
          fallback={
            <>
              <p>Loading the todos</p>
            </>
          }
        >
          <h1>LoDING tODOS</h1>
          <div>
            {/* @ts-ignore */}
            <TodosList />
          </div>
        </Suspense>

        <Suspense
          fallback={
            <>
              <p>Loading the shopping list</p>
            </>
          }
        >
          <h1>lOADING shopping Trolley</h1>
          <div>
            {/* @ts-ignore */}
            <TodosList />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
