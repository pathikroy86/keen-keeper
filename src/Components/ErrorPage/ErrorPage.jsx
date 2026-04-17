import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();

    let status = "Error";
    let message = "Something went wrong. Please try again.";
    let description = "";

    if (isRouteErrorResponse(error)) {
        status = error.status;
        message = error.statusText || "Unexpected Error";
        description = error.data || "";
    } else if (error instanceof Error) {
        description = error.message;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20">

                {/* Emoji / Icon */}
                <div className="text-6xl mb-4">😵</div>

                {/* Status */}
                <h1 className="text-5xl font-bold mb-2">{status}</h1>

                {/* Message */}
                <h2 className="text-xl font-semibold mb-3">{message}</h2>

                {/* Description */}
                {description && (
                    <p className="text-sm opacity-80 mb-6">{description}</p>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/"
                        className="px-5 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="px-5 py-2 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;