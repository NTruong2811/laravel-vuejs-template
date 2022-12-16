import layout from "./view/layout/layout";
import test1 from "./view/components/test1";
import test2 from "./view/components/test2";

const routes = [
    {
        path: "/",
        component: layout,
        children: [
            {
                path: "/",
                component: test1,
            },
            {
                path: "/test2",
                component: test2,
            },
        ],
    },
];

export default routes;
