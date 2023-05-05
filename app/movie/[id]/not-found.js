import React from 'react'
import Link  from 'next/link'

function Movie404() {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h1>We couldn&apos;t find the wtf you looking for!</h1>
            <Link
                href="/"
                style={{
                    textDecoration: "underline",
                    fontSize: 20,
                    marginTop: 8
                }}
            >
                Go Home
            </Link>

        </div>
    )
}

export default Movie404